import test from 'tape';
import createVertex from '../src/lib/create_vertex';

test('createVertex', (t) => {
  const parentOne = { properties: { id: 'foo' } };
  t.deepEqual(
    createVertex(parentOne, [1, 2], '3.4.5', true),
    {
      type: 'Feature',
      properties: {
        meta: 'vertex',
        parent: 'foo',
        parentProperties: parentOne.properties,
        coord_path: '3.4.5',
        active: 'true'
      },
      geometry: {
        type: 'Point',
        coordinates: [1, 2]
      }
    }
  );
  const parentTwo = { properties: { id: 'bar' } };
  t.deepEqual(
    createVertex(parentTwo, [99, 199], '1', false),
    {
      type: 'Feature',
      properties: {
        meta: 'vertex',
        parent: 'bar',
        parentProperties: parentTwo.properties,
        coord_path: '1',
        active: 'false'
      },
      geometry: {
        type: 'Point',
        coordinates: [99, 199]
      }
    }
  );
  const parentThree = { properties: { id: 'bar', baz: 'qux' } };
  t.deepEqual(
    createVertex(
      parentThree,
      [99, 199],
      '1',
      false
    ),
    {
      type: 'Feature',
      properties: {
        meta: 'vertex',
        parent: 'bar',
        parentProperties: parentThree.properties,
        coord_path: '1',
        active: 'false'
      },
      geometry: {
        type: 'Point',
        coordinates: [99, 199]
      }
    },
    'userProperties are copied to vertices as parentProperties'
  );

  t.end();
});

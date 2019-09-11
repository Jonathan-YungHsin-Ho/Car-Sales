export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = id => {
  console.log('Action addFeature clicked: ', id);
  return { type: ADD_FEATURE, payload: id };
};

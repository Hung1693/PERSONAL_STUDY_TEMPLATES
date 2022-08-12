// function createProject(name) {
//   return { name };
// }

// const createProject = (name) => ({ name });
//  console.log(createProject('nguyen'));

// function address(addressParts) {
//   return `${addressParts.street}, ${addressParts.city}, ${addressParts.state} ${addressParts.zip}`;
// }

const address = ({ street, city, state, zip }) => `${street}, ${city}, ${state} ${zip}`;
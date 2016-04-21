// Initialize a CU instance
var cu = new Cu({logger: true});

// Set up the elements for CU
var header = {
  name: 'Main Header',
  element: document.querySelector('h1')
};

// Make some assertions about the header
// Expect this to fail
cu.assert(
  header,
  {
    color: '#e47911',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: '36px'
  });

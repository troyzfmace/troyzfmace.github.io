/* globals Tree */
'use strict';

var tree = new Tree(document.getElementById('tree'), {
  navigate: true // allow navigate with ArrowUp and ArrowDown
});

var structure = [{
  name: 'file 1'
}, {
  name: 'file 2'
}, {
  name: '111520',
  open: false,
  type: Tree.FOLDER,
  selected: false,
  children: [{
    name: '111520/5th.txt'
  }, {
    name: '111520/6th.txt'
  }, {
    name: '111520/8th.txt'
  }, {
    name: '111520/10th.txt'
  }, {
    name: '111520/12th.txt'
  }, {
    name: '111520/14th.txt'
  }, {
    name: '111520/16th.txt'
  }, {
    name: '111520/28th.txt'
  }, {
    name: '111520/38th.txt'
  }, {
    name: '111520/SA.txt'
  }, {
    name: '111520/strasburg.txt'
	{
    name: 'folder 1/1',
    type: Tree.FOLDER,
    children: [{
      name: 'folder 1/1/1',
      type: Tree.FOLDER,
      children: [{
        name: 'folder 1/1/1/1',
        type: Tree.FOLDER,
        children: [{
          name: 'file 1/1/1/1/1'
        }, {
          name: 'file 1/1/1/1/2'
        }]
      }]
    }]
  }]
}, {
  name: 'folder 2 (asynced)',
  type: Tree.FOLDER,
  asynced: true
}];
tree.json(structure);

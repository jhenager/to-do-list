// Business Logic for To Do List

function ToDoList() {
  this.listItems = [];
  this.currentId = 0;
}

ToDoList.prototype.addListItem = function(listItem) {
  listItem.id = this.assignId();
  this.listItems.push(listItem);
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ToDoList.prototype.findListItem = function(id) {
  for (let i=0; i< globalThis.listItems.length; i++) {
    if (this.listItems[i]) {
      if (this.listItems[i].id == id) {
        return this.listItems[i];
      }
    }
  };
  return false;
}

ToDoList.prototype.deleteListItem = function(id) {
  for (let i=0; i< globalThis.listItems.length; i++) {
    if (this.listItems[i]) {
      if (this.listItems[i].id == id) {
        delete this.listItems[i];
        return true;
      }
    }
  };
  return false;
}



// Business Logic for List Items

function listItem (itemName, details, timeFrame) {
  this.itemName = itemName;
  this.details = details;
  this.timeFrame - timeFrame;
}
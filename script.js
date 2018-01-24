var todoList = {
  todos: [{todoText: 'first item', completed: false}],
  displayTodo: function () {
    // (x) if item completed = true
    // ( ) if item completed = false (default)
    // do this for all values

    // First check if values are in array
    if (this.todos.length === 0) {
      console.log("nothing in array!");
    } else {
      // Output each value inside the array
      console.log("my todos:");
      for (let i = 0; i< this.todos.length; i++) {

        // If current array item is completed
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          // current item is not completed
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todo) {
    this.todos.push({
        todoText: todo,
        completed: false
      });
    this.displayTodo();
  },
  changeTodo: function(position, newValue) {
    this.todos[position].todoText = newValue;
    this.displayTodo();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodo();
  },
  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodo();
  },
  toggleAll: function () {
    let completedTodos = 0;
    let totalTodos = this.todos.length;
    // Loop array contents [{}, {}, {}]
    for (let i = 0; i<totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // If true, make false
    if (completedTodos === totalTodos){
      for (let i = 0; i<totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {
      // else make all true
      for (let i = 0; i<totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    this.displayTodo();
  },
};

var handlers = {
  displayTodo: function() {
    todoList.displayTodo();
  },
  addTodo: function() {
    var addTodoInput = document.getElementById("addTodoInput");
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
    view.displayTodo();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoInput = document.getElementById("changeTodoInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoInput.value);
    changeTodoPositionInput.value='';
    changeTodoInput.value ='';
    view.displayTodo();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value ='';
    view.displayTodo();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.value);
    toggleCompletedPositionInput.value='';
    view.displayTodo();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodo();
  },
}

var view = {
  displayTodo: function(){
    // Once called, output the bulletpoints of todos done
    // Define initial values
    var todoUl = document.querySelector('ul');
    todoUl.innerHTML = '';
    // Loop each todolist.todo array and output its results
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      var todo = todoList.todos[i];

      if (todo.completed === true){
        todoTextWithCompletion = '(x)' + todo.todoText;
      } else {
        todoTextWithCompletion = '( )' + todo.todoText;
      }
      todoLi.textContent = todoTextWithCompletion;
      todoUl.appendChild(todoLi);
    }
  }
}

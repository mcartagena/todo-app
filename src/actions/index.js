//Write actions for
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//--Adding a task
//--Marking a task as complete
//--Filtering tasks

export const addTodo = text => ({
    type: ADD_TODO, text, id: 0
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER, filter
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO, id: id
})

export const VisibilityFilters = {
    type: SET_VISIBILITY_FILTER,
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}

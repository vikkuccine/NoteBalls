import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in itaque, nam quisquam nihil earum illo obcaecati, delectus iste fuga, non accusamus maxime neque quos quia provident repellendus laudantium saepe.'
        },
        {
          id: 'id2',
          content: 'This is second note.'
        },
      ]
    }
  },

  actions: {
    addNote(newNoteContent) {
      let currentData = new Date().getTime()
      let id = currentData.toString()

      let note = {
        id,
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => note.id !== idToDelete)
    },
    updateNote(id, content) {
      console.log('id', id);
      console.log('content', content);
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },

  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => { return note.id === id})[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharacterCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})
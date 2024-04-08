import { defineStore } from 'pinia'
import {
  collection, onSnapshot,
  doc, deleteDoc,
  updateDoc, query, orderBy,
  addDoc
} from "firebase/firestore"
import { db } from '@/js/firebase'
import { useStoreAuth } from '@/stores/storeAuth'


let notesCollectinRef
let notesCollectinQuery 
let getNotesSnapshot = null

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
      ],
      notesLoaded: false
    }
  },

  actions: {
    init() {
      const storeAuth = useStoreAuth()

      notesCollectinRef = collection(db, "users", storeAuth.user.id, 'notes')
      notesCollectinQuery = query(notesCollectinRef, orderBy("date", "desc"));
      this.getNotes()
    },
    async getNotes() {
      this.notesLoaded = false

      getNotesSnapshot = onSnapshot(notesCollectinQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
        });
        this.notes = notes
        this.notesLoaded = true
      }, error => {
        console.log('error.message', error.message);
      });
    },
    clearNotes(){
      this.notes = []
      if(getNotesSnapshot) getNotesSnapshot() // unsubscribe from any active listener
    },
    async addNote(newNoteContent) {
      let currentData = new Date().getTime()
      let date = currentData.toString()

      await addDoc(notesCollectinRef, {
        content: newNoteContent,
        date
      });
    },
    async deleteNote(idToDelete) {
      // this.notes = this.notes.filter(note => note.id !== idToDelete)

      await deleteDoc(doc(notesCollectinRef, idToDelete));
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectinRef, id), {
        content
      });
    }
  },

  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => { return note.id === id })[0].content
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
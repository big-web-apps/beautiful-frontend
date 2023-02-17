import {ref, get, set, update, child, onValue} from 'firebase/database'
import {db} from './firebase-config';
import firebase from 'firebase/compat';

type Unsubscribe = firebase.Unsubscribe

export const putObject = <Type extends object | null>(path: string, obj: Type): Promise<void> => set(ref(db, path), obj);

export const getObject = <Type extends object | null>(path: string): Promise<Type> => get(child(ref(db), path))
    .then(snapshot => snapshot.val())

export const updateObject = <Type extends object>(path: string, obj: Type): Promise<void> => update(ref(db, path), obj);

export const deleteObject = (path: string): Promise<void> => set(ref(db, path), null)

export const watchObject = <Type extends object | null>(path: string, onUpdate: (obj: Type) => void): Unsubscribe =>
    onValue(ref(db, path), snapshot => onUpdate(snapshot.val()))
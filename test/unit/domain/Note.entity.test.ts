import { beforeEach, describe, expect, it } from 'vitest';
import { Note, NoteProps } from '../../../src/domain/Note.entity';

let noteInput: NoteProps;
let note: Note;
let currentDate: Date;

beforeEach(() => {
  currentDate = new Date();

  noteInput = {
    date: currentDate,
    weekday: 'friday',
    content: 'test day',
    mood: 'happy'
  };

  note = new Note(noteInput, 'userId');
});

describe('Note entity', () => {
  it('Should have the correct properties for a Note', () => {
    expect(note).toHaveProperty('date', currentDate);
    expect(note).toHaveProperty('weekday', 'friday');
    expect(note).toHaveProperty('content', 'test day');
    expect(note).toHaveProperty('mood', 'happy');
    expect(note).toHaveProperty('userId', 'userId');
  });

  it('Should throw an error if date is from the future', () => {
    noteInput.date.setDate(noteInput.date.getDate() + 1);

    const noteResult = () => {
      note = new Note(noteInput, 'userId');
    };

    expect(noteResult).toThrow("Note can't be written on this date yet");
  });

  it('Should throw an error if content is over a thousand characters', () => {
    noteInput.content = 'a'.repeat(1001);
    console.log(noteInput);
    const noteResult = () => {
      note = new Note(noteInput, 'userId');
    };

    expect(noteResult).toThrow("Content can't be over a 1000 characters'");
  });

  it('Should have the userId defined by SetUserId method', () => {
    note.setUserId('newUserId');

    expect(note).toHaveProperty('userId', 'newUserId');
  });
});

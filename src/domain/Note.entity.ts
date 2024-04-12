type NoteProps = {
  date: Date;
  weekday: string;
  content: string;
  mood: string;
};

export default class Note {
  date: Date;

  weekday: string;

  content: string;

  mood: string;

  private userId: string;

  constructor(note: NoteProps, userId: string) {
    Note.validateDate(note.date);
    this.date = note.date;

    this.weekday = note.weekday;

    Note.validateContent(note.content);
    this.content = note.content;

    this.mood = note.mood;

    this.userId = userId;
  }

  static validateDate(date: Date) {
    if (date > new Date()) {
      throw new Error("Note can't be written on this date yet");
    }
  }

  static validateContent(content: string) {
    if (content.length > 1000) {
      throw new Error("Content can't be over a 1000 characters'");
    }
  }

  setUserId(userId: string) {
    this.userId = userId;
  }
}

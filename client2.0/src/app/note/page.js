// app/note/page.js
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { selectNotes } from '../../redux/slices/notesSlice';
import { logout } from '../../redux/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function NotesPage() {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login'); // Redirect to login page after logout
  };

  return (
    <div>
      <h1>Your Notes</h1>
      <button onClick={handleLogout}>Logout</button>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>{note.content}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

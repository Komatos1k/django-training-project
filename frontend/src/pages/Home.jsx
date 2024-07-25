import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
import { Grid } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted");
                else alert("Note not deleted");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api.post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created");
                else alert("Note not created" + res.status);
                getNotes();
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Button component={Link} to="/logout">
                LogOUT
            </Button>
            <div>
                <h2>Notes</h2>
                <Grid container spacing={2}>
                    {notes.map((note) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
                            <Note note={note} onDelete={deleteNote} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <h2>Create Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;

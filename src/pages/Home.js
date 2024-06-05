import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>🌍ברוכים הבאים לגלריית דגלי העולם! 🌍</h1>
      <p>🌍גלו את הצבעים, ההיסטוריה והסיפורים שמאחורי דגלי העולם. כל דגל מספר את סיפורה של מדינתו, ההיסטוריה שלה ואנשיה. צללו אל תוך מסע מרתק דרך עולם הדגלים הצבעוני וגלו את התרבויות העשירות שהם מייצגים.🌍</p>
      <Link to="/items">
        <button className="explore-button">לגלריה 👍  🌍</button>
      </Link>
    </div>
  );
}





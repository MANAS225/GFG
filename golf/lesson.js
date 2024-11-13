const bookLessonButton = document.getElementById('book-lesson');
bookLessonButton.addEventListener('click', () => {
    const lessonType = document.querySelector('input[name="lesson-type"]:checked').value;
    const lessonDate = document.getElementById('lesson-date').value;
    const lessonTime = document.getElementById('lesson-time').value;
    const instructor = document.getElementById('instructor').value;
}, false);

    const lessonData = {
        lessonType,
        lessonDate,
        lessonTime,
        instructor
    };
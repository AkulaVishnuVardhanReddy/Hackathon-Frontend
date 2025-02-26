import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./Card";
import { Select, SelectItem } from "./Select";
const examData = {    CSE: {
      "1st Year": {
        "Mid-1": [
          { subject: "Mathematics", date: "2025-03-10" },
          { subject: "Physics", date: "2025-03-12" },
          { subject: "Programming", date: "2025-03-14" },
        ],
        "Mid-2": [
          { subject: "Mathematics", date: "2025-04-10" },
          { subject: "Physics", date: "2025-04-12" },
          { subject: "Programming", date: "2025-04-14" },
        ],
        "Mid-3": [
          { subject: "Mathematics", date: "2025-05-10" },
          { subject: "Physics", date: "2025-05-12" },
          { subject: "Programming", date: "2025-05-14" },
        ],
        "Semester": [
          { subject: "Mathematics", date: "2025-06-10" },
          { subject: "Physics", date: "2025-06-12" },
          { subject: "Programming", date: "2025-06-14" },
        ],
      },
      "2nd Year": {
        "Mid-1": [
          { subject: "Data Structures", date: "2025-03-15" },
          { subject: "DBMS", date: "2025-03-18" },
          { subject: "Operating Systems", date: "2025-03-20" },
        ],
        "Semester": [
          { subject: "Data Structures", date: "2025-06-15" },
          { subject: "DBMS", date: "2025-06-18" },
          { subject: "Operating Systems", date: "2025-06-20" },
        ],
      },
      "3rd Year": {
        "Mid-1": [
          { subject: "Computer Networks", date: "2025-03-17" },
          { subject: "Software Engineering", date: "2025-03-19" },
          { subject: "Artificial Intelligence", date: "2025-03-21" },
        ],
      },
      "4th Year": {
        "Mid-1": [
          { subject: "Machine Learning", date: "2025-03-25" },
          { subject: "Cyber Security", date: "2025-03-28" },
          { subject: "Cloud Computing", date: "2025-03-30" },
        ],
      },
    },
  
    ECE: {
      "1st Year": {
        "Mid-1": [
          { subject: "Basic Electronics", date: "2025-03-11" },
          { subject: "Digital Logic", date: "2025-03-14" },
          { subject: "Signals & Systems", date: "2025-03-16" },
        ],
        "Semester": [
          { subject: "Basic Electronics", date: "2025-06-11" },
          { subject: "Digital Logic", date: "2025-06-14" },
          { subject: "Signals & Systems", date: "2025-06-16" },
        ],
      },
      "2nd Year": {
        "Mid-1": [
          { subject: "Analog Circuits", date: "2025-03-15" },
          { subject: "Microprocessors", date: "2025-03-17" },
          { subject: "Communication Systems", date: "2025-03-19" },
        ],
      },
    },
  
    EEE: {
      "1st Year": {
        "Mid-1": [
          { subject: "Circuit Theory", date: "2025-03-12" },
          { subject: "Electromagnetics", date: "2025-03-15" },
          { subject: "Electrical Machines", date: "2025-03-18" },
        ],
      },
    },
  
    MECH: {
      "1st Year": {
        "Mid-1": [
          { subject: "Engineering Drawing", date: "2025-03-13" },
          { subject: "Mechanics", date: "2025-03-16" },
          { subject: "Thermodynamics", date: "2025-03-19" },
        ],
      },
    },
  
    CHEM: {
      "1st Year": {
        "Mid-1": [
          { subject: "Physical Chemistry", date: "2025-03-14" },
          { subject: "Organic Chemistry", date: "2025-03-17" },
          { subject: "Chemical Engineering", date: "2025-03-20" },
        ],
      },
    },
  
    MME: {
      "1st Year": {
        "Mid-1": [
          { subject: "Materials Science", date: "2025-03-15" },
          { subject: "Metallurgy", date: "2025-03-18" },
          { subject: "Nanotechnology", date: "2025-03-21" },
        ],
      },
    },
  
    CIVIL: {
      "1st Year": {
        "Mid-1": [
          { subject: "Structural Analysis", date: "2025-03-16" },
          { subject: "Surveying", date: "2025-03-19" },
          { subject: "Concrete Technology", date: "2025-03-22" },
        ],
      },
    },
  };
  

export default function ExamSchedule() {
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [examType, setExamType] = useState("");

  const schedules =
    branch && year && examType
      ? examData[branch]?.[year]?.[examType] || []
      : [];

  return (
    <div className="flex bg-cover bg-center flex-col bg-ima items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 text-gray-900 p-6" 
    style={{ backgroundImage: "url('../../public/examschedulebg.jpg')" }}>

        <motion.h1
  className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text 
             bg-gradient-to-r from-white to-gray-300 drop-shadow-lg"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Exam Schedule 
</motion.h1>



      {/* Select Dropdowns */}
      <div className="flex flex-wrap gap-4 mb-8">
        {/* Branch Select */}
        <Select value={branch} onChange={setBranch} placeholder="Select Branch">
          {Object.keys(examData).map((b) => (
            <SelectItem key={b} value={b}>
              {b}
            </SelectItem>
          ))}
        </Select>

        {/* Year Select */}
        <Select
          value={year}
          onChange={setYear}
          placeholder="Select Year"
          disabled={!branch}
        >
          {branch &&
            Object.keys(examData[branch]).map((y) => (
              <SelectItem key={y} value={y}>
                {y}
              </SelectItem>
            ))}
        </Select>

        {/* Exam Type Select */}
        <Select
          value={examType}
          onChange={setExamType}
          placeholder="Select Exam"
          disabled={!year}
        >
          <SelectItem value="Mid-1">Mid-1</SelectItem>
          <SelectItem value="Semester">Semester</SelectItem>
        </Select>
      </div>

      {/* Display Exam Schedule */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full flex flex-col items-center"
      >
        {schedules.length > 0 ? (
          schedules.map((exam, index) => (
            <Card key={index} className="mb-4">
              <CardContent title={exam.subject} date={exam.date} />
            </Card>
          ))
        ) : (
          <p className="text-white font-medium">
            Select a Branch, Year & Exam Type to view the schedule.
          </p>
        )}
      </motion.div>
          <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        {showCalendar ? "Hide Calendar" : "View Calendar"}
      </button>

      {/* Google Calendar Embed (Visible when button is clicked) */}
      {showCalendar && (
        <div className="mt-6 w-full flex justify-center">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=2a79a6581537d55aba7f0b0c6a3417b74730a7e36055ed90d1ab28011df53489%40group.calendar.google.com&ctz=UTC"
            style={{ border: "0" }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            className="shadow-lg rounded-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
}

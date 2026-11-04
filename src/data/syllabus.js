// Hours and unit names come from the syllabus. `description` and `subtopics` are intentionally empty:
// add the exact details from the official syllabus document later.
const u = (no, si, en, hours) => ({ no, si, en, hours, description: '', subtopics: [] })
export const syllabus = [
  u(1, 'තොරතුරු සහ සන්නිවේදන තාක්ෂණය පිළිබඳ සංකල්පය', 'Concept of ICT', 28),
  u(2, 'පරිගණකය හැඳින්වීම', 'Introduction to Computer', 22),
  u(3, 'දත්ත නිරූපණය', 'Data Representation', 18),
  u(4, 'අංකිත පරිපථවල මූලිකතා', 'Fundamentals of Digital Circuits', 26),
  u(5, 'පරිගණක මෙහෙයුම් පද්ධති', 'Computer Operating Systems', 22),
  u(6, 'දත්ත සන්නිවේදනය හා ජාලකරණය', 'Data Communication and Networking', 50),
  u(7, 'පද්ධති විශ්ලේෂණය හා පිරිසැලසුම', 'Systems Analysis and Design', 68),
  u(8, 'දත්ත සමුදාය කළමනාකරණය', 'Database Management', 50),
  u(9, 'ක්‍රමලේඛකරණය', 'Programming', 74),
  u(10, 'වෙබ් අඩවි සංවර්ධනය', 'Web Development', 60),
  u(11, 'සාර්ව ද්‍රව්‍ය අන්තර්ජාලය / අන්තර්ජාල සබැඳි දේවල්', 'Internet of Things', 15),
  u(12, 'ව්‍යාපාර තුළ තොරතුරු සන්නිවේදන තාක්ෂණය', 'ICT in Business', 12),
  u(13, 'තොරතුරු සන්නිවේදන තාක්ෂණයේ නව නැඹුරු සහ අනාගත දිශානති', 'New Trends and Future Directions of ICT', 12),
  u(14, 'ව්‍යාපෘතිය', 'Project', 30)
]
export const totalHours = syllabus.reduce((s, x) => s + x.hours, 0) // 487

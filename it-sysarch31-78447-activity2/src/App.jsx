import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Student from './Student.jsx'

function App() {
  const students = [
    { id: 1, name: 'Sean', imageUrl: 'sean.jpg' },
    { id: 2, name: 'Strickland', imageUrl: 'strickland.jpg' },
    { id: 3, name: 'Conor', imageUrl: 'conor.jpg' },
    { id: 4, name: 'McGregor', imageUrl: 'mcgregor.jpg' },
  ];

  return (
    <>
      <Header />
      <div className="students-container">
        {}
        {students.map(student => (
          <Student key={student.id} name={student.name} imageUrl={student.imageUrl} />
        ))}
      </div>
      <Footer />
    </>
  );
}


export default App

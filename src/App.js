import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FamilyInfoScreen from './screens/FamilyInfoScreen';
import RecordScreen from './screens/RecordScreen';


function App( ) {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/login" component={LoginScreen}  />
            <Route path="/family/:email" component={FamilyInfoScreen}  />
            <Route path="/records/:email" component={RecordScreen}  />
        </Container>
      </main>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;

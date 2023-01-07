import './minDashboard.css';
import Card from './components/card/Card';
import { useState } from 'react';
var json = require('./file1.json')
  function App() {
    const [collapsed, setCollapsed] = useState(true);
    
    return <>
        <div className="App">
        <div className={"cards " + (!collapsed && "blur")}>
            {json.map(({title,label})=>(
        <Card title={title} data={label} blue={true}/>
        ))}
        {/* <Card title={applications1.title} count={applications1.count} growth={applications1.growth} data={applications1.data} blue={applications1.blue}/> */}
        {/* <Card title={shortlists.title} count={shortlists.count} growth={shortlists.growth} data={shortlists.data} blue={shortlists.blue}/> */}
        {/* <Card title={applications2.title} count={applications2.count} growth={applications2.growth} data={applications2.data} blue={applications2.blue}/>      */}
         </div>
      </div>
      </>
  }
  export default App;
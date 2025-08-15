import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <table border="">
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Image</th>
      </tr>
      <tr>
        <td className="whiteBackground">Trusha</td>
        <td className="blackBackground">Nimse</td>
        <td><img src="../assets/lotus.jfif" width="100"></img></td>
         </tr>
       <tr>
        <td className="blackBackground">Shardul</td>
        <td className="whiteBackground">Pawar</td>
        <td><img src="../assets/springflower.jfif" width="100"></img></td>
        </tr>
       <tr>
        <td className="whiteBackground">Gaurav</td>
        <td className="blackBackground">Pawar</td>
        <td><img src="../assets/flower.jfif" width="100"></img></td>
        </tr>
       <tr>
        <td className="blackBackground">Shravani</td>
        <td className="whiteBackground">Gunjal</td>
        <td><img src="../assets/lily.jfif" width="100"></img></td>
        </tr>
       <tr>
        <td className="whiteBackground">Rutuja</td>
        <td className="blackBackground">Date</td>
        <td><img src="../assets/dandelion.jfif" width="100"></img></td>
      </tr>
    </table>
        
  );
}

export default App;

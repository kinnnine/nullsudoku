import projectPackageJson from '../../../package.json';

const appVersion = projectPackageJson.version || "unknown";


export default function ModalAbout({modalHandler}) {
    const closeHandler = () => modalHandler('cancel');
    const thisYear = (new Date()).getFullYear();
    return (
        <div className="modal about">
            <h1>About this app</h1>
            <p>Application version: {appVersion}</p>
            <p> NullSudoku is a fork of <a href="https://grantm.github.io/">Grant McLean</a>'s Sudoku web app 
            (<a href="https://sudokuexchange.com/">SudokuExchange.com</a>)</p>
            <p>It is <a href="https://www.fsf.org/about/what-is-free-software">free software</a>{' '}
            which you can use, copy, modify and share under the terms of the
            GNU Affero General Public License version 3 (<a href="https://opensource.org/licenses/AGPL-3.0"
            >AGPLV3</a>). The source code is available at:<br />
            <a href="https://github.com/kinnnine/nullsudoku">https://github.com/kinnnine/nullsudoku</a>.</p>
            <p>Copyright © 2020{thisYear > 2020 ? `-${thisYear}` : ''} Grant McLean<br />
            Copyright © 2026 Supphakit Duanghoy (kinnnine)</p>
            <div className="buttons">
                <button className="primary" onClick={closeHandler} autoFocus>OK</button>
            </div>
        </div>
    )
}

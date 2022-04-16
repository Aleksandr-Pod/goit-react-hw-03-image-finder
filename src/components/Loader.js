import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Audio } from 'react-loader-spinner'

export default function Loader() { 
    return (<div className="spinner">
        <Audio/>
        {/* Используй любой готовый компонент, например react-loader-spinner */}
        </div>
    )
}
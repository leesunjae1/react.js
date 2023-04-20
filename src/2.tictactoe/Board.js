import Square from './Square'

export default function Board() {
    return (
        <>
            <div className='board-row'>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className='board-row'>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className='board-row'>
               <Square value='7'/>
               <Square value='8'/>
               <Square value='9'/>
            </div>
        </>
    )
}
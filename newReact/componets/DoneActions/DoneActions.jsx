export default function DoneActions({ doneActions }) {
    return (
        <>
            {!doneActions ? <p>List of completed actions:</p> : null}      
            <ul>
                { doneActions && 
                    Array.isArray(doneActions) && 
                    doneActions.map(item => (<li key={item}>{item}</li>))
                }
            </ul>
        </>
    );
}

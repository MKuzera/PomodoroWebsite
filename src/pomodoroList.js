
const PomodoroList = ({pomodoros}) => {

    return(
        <div className="sideBarLeft">
            {pomodoros.map((pomodoro) => (
                <div className="pomodoro" key={pomodoro.id}>
                    <h2>{pomodoro.description} {pomodoro.date}</h2>
                    <p>Total: {pomodoro.counter}</p>
                </div>
            ))}
        </div>
    )
}
export default PomodoroList;
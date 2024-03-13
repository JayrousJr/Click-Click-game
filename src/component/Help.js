function Help(props) {
  const date = new Date().getFullYear();
  return (
    <div className="help">
      <h2 className="help-head">How to play clickclick</h2>
      <p>
        Click Click is a game intended to challenge your ability of speedy and
        efficiency searching by making you find the number in ascending order
        and clock them. The largest level is 10x10 with 100 numbers.
      </p>
      <p>
        To play Click Click, just click numbers in ascending order till the last
        number in the series to win!
      </p>
      <br />
      <br />
      <p>
        This Software is brought to you by Legolas Technologies Game Center.
      </p>
      <p className="footer">
        &copy; {date} <a href="https://legolas.tech">Legolas Technologies</a>
      </p>
    </div>
  );
}

export default Help;

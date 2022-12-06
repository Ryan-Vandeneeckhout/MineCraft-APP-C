export default function BlockStateInput (props) {
        const handleUserInput = (e) => {
          props.setValueBlockInput(`${e.target.value}`);
        };
      
        return (
          <div className="labelsBlockState">
             
            <input
              required
              aria-label="BlockState input"
              type="text"
              onChange={handleUserInput}
              placeholder={props.valueBlockInput}
              value={props.valueBlockInput}
            />
            <label htmlFor="BlockState input">Choose Block State:</label>
          </div>
        );   
}
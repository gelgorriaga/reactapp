class RenderButton extends React.Component{
    handleClick = () => {
        location.reload();

      }
    
      render() {
        return (
          <button onClick={this.handleClick}>
            Try again!
          </button>
        );
      }
 }


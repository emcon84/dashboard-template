

interface Props {
    height: number;   
    width: number;
    style?: string;
    src: string;
    class?: string;   
  }
  
  export const Text = (props: Props) => {  
    
    return (
        <img 
            className={props.class ? props.class : ''}  
            width={props.width}
            height={props.height}
            src={props.src}
        />           
        
    )  

}
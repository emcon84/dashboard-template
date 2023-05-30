
type Etiqueta = 'p' | 'strong' | 'span';

interface Props {
    content: string;
    type: Etiqueta;
    color?: string;
    style?: string   
  }
  
  export const Text = (props: Props) => {  
    
    return (
        <props.type className={props.color ? props.color + ' ' + props.style : `${props.style} text-black` }>
            {props.content}
        </props.type>
    )  

}
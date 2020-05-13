import React from 'react';
import { Button , Form} from 'semantic-ui-react';
class ProductDetails extends React.Component{
  constructor()
  {
    super()
    this.state={
      ch:0,
      step:0,
      nm:'',
      stock:"",
      sp:0,
      cp:0


    }
    this.nextstep= this.nextstep.bind(this);
    this.prevstep=this.prevstep.bind(this);
    this.handlechange=this.handlechange.bind(this);
    this.handleonclick=this.handleonclick.bind(this);
   
  }
  saveAndContinue = (e) => {
    e.preventDefault();
    this.nextstep();
}

back  = (e) => {
    e.preventDefault();
    if (e.target.value==0)  {
      this.setState(
        {
          step:0,
        ch:0});
          
    }
    
    else{
    this.prevstep();
}
}


  nextstep(){
    if (this.state.ch==1 ){
      if (this.state.step==-1) {
        this.setState({
          step:1
        });
      }
      else{
        this.setState({
          step:this.state.step+1
        });
      }


  }
    else if(this.state.ch==2){
      if(this.state.step!=2){
    this.setState({
      step:this.state.step+2
    });
  }
  else{
    this.setState({
      step:this.state.step+1
    });
  }
}
  
  else if(this.state.ch==0) {
    this.setState({
      step:-1
    });
  }
 
  else {
    this.setState({
      step:0
    });
   
  }
  }
  prevstep(){
    this.setState({
      step:this.state.step-1,
    });
  }
  
  handleonclick(event){
    this.setState({
      ch:event.target.value
    });
  }
  handlechange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    });
    
}


render(){
  const {step} = this.state;
  const {nm,stock,cp,sp} = this.state;
  
  switch(step) {
    case -1:
     return(
     <div className="Final">
      
     <hr className="hrfinal"/>
     
     <h1>Product Details:</h1>
     <input className="infinal" type="radio" id="choice"  name="ch"  value="1" onClick={this.handleonclick} />
     <label>stocks data</label><br/><span/>
     <input className="infinal" type="radio" id="choice" name="ch"  value="2" onClick={this.handleonclick} />
     <label>Add a new Product</label><br/>
     <Button className="infinal" onClick={this.saveAndContinue} className="bttn">Save And Continue </Button>
     <footer> * Please enter a valid choice</footer>
     
     <hr className="hrbottom"/>
    
  
   </div>
     )
   case 0:
     return(
     <div className="Final">
      
     <hr className="hrfinal"/>
     
     <h1>Product Details:</h1>
     <input className="infinal" type="radio" id="choice"  name="ch"  value="1" onClick={this.handleonclick} />
     <label>Stocks data</label><br/><span/>
     <input className="infinal" type="radio" id="choice" name="ch"  value="2" onClick={this.handleonclick} />
     <label>Add a new Product</label><br/>
     <Button className="infinal" onClick={this.saveAndContinue} className="bttn">Save And Continue </Button>
     <hr className="hrbottom"/>
     
  
   </div>
   )
case 1:
  return(
    //Added for the time being
    <div className="Final">
      <hr className="hrfinal"/>
      <h1>There is no content to display</h1>  
      <Button value="0" onClick={this.back} className="bttn">Back to main page</Button>
      <hr className="hrbottom"/>
     
      </div>)
  case 2:
    
      return(
        
        <div className="Final">
          
        <Form>
        
          <hr className="hrfinal"/>
        <h1 >Enter product Details:</h1>
        <Form.Field>
            <label>Product Name: </label>
            <input className="bttnfinal"
            name="nm"
            value={this.state.nm}
            placeholder='product Name'
            type="text"
            onChange={this.handlechange}
        
            />
        </Form.Field>
        
        
        <Form.Field>
            <label>Stock Available: </label>
            <input className="bttnfinal"
            name="stock"
            value={this.state.stock}
            placeholder='Stock Available'
            type="text"
            onChange={this.handlechange}
           
            />
        </Form.Field>
        
        <Form.Field>
          
            <label>Cost Price: </label>
            <input className="bttnfinal"
            name="cp"
            value={this.state.cp}
            placeholder='Cost Price'
            type="number"
            onChange={this.handlechange}
            
            />
        </Form.Field>
        <Form.Field>
            <label>Selling Price </label>
            <input className="bttnfinal"
            name="sp"
            type="number"
            value={this.state.sp}
            placeholder='Selling Price'
            onChange={this.props.handlechange}
           
            />
        </Form.Field>
        
        <Button value="0" onClick={this.back} className="bttn">Back</Button>
        <Button onClick={this.saveAndContinue} className="bttn">Save And Continue </Button>
        
         <hr className="hrbottom"/>
    </Form>
    
    </div>
      );
    
  case 3:
      return (  <div className="Final"> 
   
      <hr className="hrfinal"/>
      
        <h1 >Details Saved Successfully</h1>
     
      <Button value="0" onClick={this.back} className="bttn">Back to main page</Button>
      
      <hr className="hrbottom"/>
    
    </div>);

  
             } //Switch
        
   }//render
}
export default ProductDetails;

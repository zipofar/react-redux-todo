import React from 'react';

export default class ModalInformer extends React.Component {
	
  render() {
    return(
      <div className="modal" style={{display: 'block'}} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{ this.props.title }</h5>
            </div>
            <div className="modal-body">
	           	{this.props.children}
						</div>
          </div>
        </div>
      </div>        
    );
  }
}


import React, { Component } from 'react';
import { createPost } from '../actions/index';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    // ES 6 syntax
    const { fields: { title, categories, content }, handleSubmit } = this.props;// eq : const handleSubmit = this.props.handleSubmit;
    // eq :sconst title = this.props.fields.title;
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
// connect : first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm : 1st is a form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);


// user types something in... record it on application state
/*state  === {
  form: {
    PostNewForm: {
      title: '...',
      categories: '...',
      content: '...',
    }
  }
}*/

import React, { Component } from 'react';
import { createPost } from '../actions/index';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

class PostsNew extends Component {
  render() {
    // ES 6 syntax
    const { fields: { title, categories, content }, handleSubmit } = this.props;// eq : const handleSubmit = this.props.handleSubmit;
    // eq :sconst title = this.props.fields.title;
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter at least one category';
  }
  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;

}

// connect : first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm : 1st is a form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
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

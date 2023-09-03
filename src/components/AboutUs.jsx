import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h2>About Us</h2>
              <p>
                Welcome to our text transformation app! Our app allows you to
                convert a paragraph into uppercase or lowercase. Additionally,
                you can find out how many words and characters are in the
                provided paragraph.
              </p>
              <p>
                To get started, go to the "Transform Text" section and enter
                your paragraph. You can then select whether you want it in
                uppercase or lowercase and click the "Transform" button. Our
                app will do the rest!
              </p>
              <p>
                Thank you for using our app. If you have any feedback or
                questions, please don't hesitate to contact us at{' '}
                <a href="danyalhamid@gmail.com">danyalhamid@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

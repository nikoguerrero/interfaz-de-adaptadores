import React from 'react'

const Form = () => {
    return (
      <div>
        <h2 className="h1 text-center">Form</h2>
        <div class="row g-3">
  <div class="col-sm-6">
  <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
  </div>
  <div class="col-sm-6">
  <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
  </div>
  <div class="col-sm">
    <div class="form-outline">
      <input type="text" id="form10Example3" class="form-control" />
      <label class="form-label" for="form10Example3">Name</label>
    </div>
  </div>
</div>
      </div>
    );
}

export default Form

class DepartmentApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  addNewDepartment(titleDepartment) {
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ titleDepartment }),
    }).then(this._checkResponse);
  }


  addEquipmentDepartment(params) {
    console.log(localStorage.getItem('token'));
    const { idDepartment, titleGroup } = params;
    return fetch(`${this.baseUrl}/${idDepartment}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({
        titleGroup,
      }),
    }).then(this._checkResponse);
  }

  // deleteMessage(params) {
  //   const { messageId, topicId } = params;
  //   return fetch(`${this.baseUrl}/${topicId}/message`, {
  //     method: 'PATCH',
  //     headers: this.headers,
  //     body: JSON.stringify({
  //       messageId,
  //     }),
  //   }).then(this._checkResponse);
  // }

  // deleteTopic(params) {
  //   return fetch(`${this.baseUrl}/${params}`, {
  //     method: 'DELETE',
  //     headers: this.headers,
  //   }).then(this._checkResponse);
  // }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };
}

const departmentApi = new DepartmentApi({
  baseUrl: 'http://localhost:3000/departmen',
  // baseUrl: 'https://api.my-live.website/topic',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'content-type': 'application/json',
  },
});

export { departmentApi };

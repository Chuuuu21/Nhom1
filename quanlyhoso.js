
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/api/profile');
    const data = await res.json();
    document.querySelector('.profile-header h2').textContent = data.username;
    document.querySelector('.profile-header .email-text').textContent = data.email;
    document.querySelector('.profile-header img').src = data.avatar;
    const infoTable = document.querySelector('.info-table');
    infoTable.innerHTML = `
      <tr><td>Name</td><td>${data.fullName}</td></tr>
      <tr><td>Date of Birth</td><td>${data.dob}</td></tr>
      <tr><td>Address</td><td>${data.address}</td></tr>
      <tr><td>Sex</td><td>${data.sex}</td></tr>
      <tr><td>Email</td><td>${data.email}</td></tr>
      <tr><td>Number</td><td>${data.number}</td></tr>
      <tr><td>Occupation</td><td>${data.occupation}</td></tr>
    `;
  } catch (e) {
    alert('Không thể tải dữ liệu hồ sơ từ backend!');
  }
});

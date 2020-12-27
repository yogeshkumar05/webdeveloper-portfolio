import React from 'react';

export default function Languages(props) {
  return (
    <table>
      <tr>
        <th style={{ width: '50%' }}>Language</th>
        <th>Read</th>
        <th>Write</th>
        <th>Speak</th>
      </tr>
      <tr>
        <td>English</td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td>Kannada</td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td>Hindi</td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td>Tamil</td>
        <td><i class="fa fa-remove"></i></td>
        <td><i class="fa fa-remove"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
    </table>
  );
}
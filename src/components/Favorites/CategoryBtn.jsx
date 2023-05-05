import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import {useState} from 'react';
import axios from 'axios';

function CategoryBtn({gif}) {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    console.log(e.target.value)
    setCategory(e.target.value);
  }

  const putCategory = () => {
    axios.put(`/api/favorite/${gif.id}`, {
      category_id: category,
      id: gif.id
    }).then((response) => {
    }).catch((error) => {
      console.log(`Error in putCatgegory: ${error}`);
      alert(`Goshdarnnit`);
    })
  }

  return (
    <>
    <InputLabel id="category-label">category</InputLabel>
    <Select
      labelId="category-label"
      label="category"
      onChange={handleCategoryChange}
      value={category}
    >
      <MenuItem value={1}>Funny</MenuItem>
      <MenuItem value={2}>Cohort</MenuItem>
      <MenuItem value={3}>Cartoon</MenuItem>
      <MenuItem value={4}>nsfw</MenuItem>
      <MenuItem value={5}>Mememememe</MenuItem>
    </Select>
    <br />
    <button onClick={putCategory} >submit</button>
    </>
  )
}

export default CategoryBtn;
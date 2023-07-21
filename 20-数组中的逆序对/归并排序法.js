function InversePairs(data) {
  const left = 0;
  const temp = [];
  const res = [0];
  const right = data.length - 1;
  m_sort(data, temp, left, right, res);
  const mod = 1e9 + 7;
  return res[0] % mod;
}

function m_sort(arr, temp, left, right, res) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    m_sort(arr, temp, left, mid, res);
    m_sort(arr, temp, mid + 1, right, res);
    mergeSort(arr, temp, left, mid, right, res);
  }
}

function mergeSort(arr, temp, left, mid, right, res) {
  let l_pos = left;
  let r_pos = mid + 1;
  let t_pos = left;
  while (l_pos <= mid && r_pos <= right) {
    if (arr[l_pos] > arr[r_pos]) {
      temp[t_pos++] = arr[r_pos++];
      res[0] += mid - l_pos + 1;
    } else {
      temp[t_pos++] = arr[l_pos++];
    }
  }

  while (l_pos <= mid) {
    temp[t_pos++] = arr[l_pos++];
  }

  while (r_pos <= right) {
    temp[t_pos++] = arr[r_pos++];
  }

  while (left <= right) {
    arr[left] = temp[left];
    left++;
  }
}

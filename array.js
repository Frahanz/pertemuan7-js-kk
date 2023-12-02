var hari = 'senin'
var hari = 'selasa'
console.log (hari)

var view = []
view = ['Bukittinggi','Lembah Anai', 'Kebun Teh']
console.log (view, view.length)

// Array Dalam Array
console.log('Array Dalam Array')
let dalam_array = ['test',true,3,'benar',[1,2,3,4,5]]
console.log(dalam_array[4][2])

// let keluarga = ['Farhan',['Budi sudarsono','ayu sintia putri',['joko','dina','april','alif','doni']]]
// console.log('${keluarga[1][2][2]} adalah anak dari ibu ${keluarga[1][1]}')

// var arr = []
// arr[0]='senin'
// arr[1]='selasa'
// arr[2]='rabu'
// arr[3]='kamis'
// console.log(arr)

//  Cara menghapus dan mengganti
var ya = ['terserah', 'tidak', 'ya']
ya[1] = 'bentar'
console.log(ya)

//  Array dalam Looping
var day = ['senin', 'selasa', 'rabu']
for (i=0; i<3; i++){
    console.log(day[i])
}
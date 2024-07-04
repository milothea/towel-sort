module.exports = function towelSort (matrix = []) {
    if (matrix.length === 0) return [];

    const editedMatrix = matrix.map((arr, i) => i % 2 === 0 ? arr : arr.reverse());

    return editedMatrix.flat();
}

/**
 * @file file system API: read and write.
 */

import fs from 'fs'

/**
 * Assign the data to the database object and write the new state at the location filePath.
 * @param {object!} data object to merge with the current state of the database.
 * @param {object!} databaseState object representing the current state of the database.
 * @param {string!} filePath the path of the file that store de serialized database object.
 */
export function write (data, databaseState, filePath) {
  const newDatabaseState = Object.assign(databaseState, data)
  fs.writeFileSync(filePath, JSON.stringify(newDatabaseState))
  return newDatabaseState
}

/**
 * Read the data containing by the databaseState object.
 * @param {string!} key the key to select (could be "key" or "parent.child.key").
 * @param {Object!} databaseState the database state where to select the key value.
 */
export function read (key, databaseState) {
  return databaseState[key]
}

/**
 * Get the sate serialized in filePath.
 * @param {string!} filePath filePath of the database.
 */
export function getState (filePath) {
  const databaseSerialized = fs.readFileSync(filePath)
  return JSON.parse(databaseSerialized)
}

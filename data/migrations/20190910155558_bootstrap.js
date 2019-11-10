
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
    tbl.string('VIN', 17).unique().notNullable()
    tbl.string('make').notNullable()
    tbl.string('model').notNullable()
    tbl.integer('mileage').notNullable()
    tbl.string('transmission')
    tbl.string('status')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
}


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN:'JH4DA9440PS002537', make:'Acura', model:'Integra', mileage:'123456'},
        {VIN:'1MEBM62F2JH693379', make:'Mercury', model:'Cougar', mileage:'235678',transmission:'manual'},
        {VIN:'JF1GV7F67DG002982', make:'Subaru', model:'Impreza', mileage:'50000',transmission:'auto',status:'salvage'},
      ])
    })
}

class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :text, null: false, length: 50
      t.boolean :important, null: false
      t.boolean :urgent, null: false

      t.timestamps
    end
  end
end

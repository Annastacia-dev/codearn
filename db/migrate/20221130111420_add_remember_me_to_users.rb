class AddRememberMeToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :remember_me, :boolean, default: false
  end
end

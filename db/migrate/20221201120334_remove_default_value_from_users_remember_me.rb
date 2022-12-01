class RemoveDefaultValueFromUsersRememberMe < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :remember_me, nil
  end
end

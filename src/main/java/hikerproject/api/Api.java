package hikerproject.api;

public class Api {

	private final String location;
	private final String difficulty;
	private final int miles;

	public Api(String location, String difficulty, int miles) {
        this.location = location;
        this.difficulty = difficulty;
        this.miles = miles;
	}

	public String getLocation() {
		return location;
	}
	public String getDifficulty() {
		return difficulty;
	}
	public int getMiles() {
		return miles;
	}
}